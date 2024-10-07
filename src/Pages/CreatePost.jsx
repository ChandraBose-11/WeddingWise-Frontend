import { Alert, Button, FileInput ,Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { HiInformationCircle } from "react-icons/hi";

const CreatePost = () => {
  const [file, setFile] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [formData, setFormdata] = useState({});
  const [publishError, setPublishError] = useState(null);
  const navigate = useNavigate();

  //imageupload
  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageFileUploadError("Please select an image");
        return;
      }
      setImageFileUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageFileUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageFileUploadError("Image upload failed");
          setImageFileUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageFileUploadProgress(null);
            setImageFileUploadError(null);
            setFormdata({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageFileUploadError("Image upload failed");
      setImageFileUploadProgress(null);
      console.log(error);
    }
  };

  //create Post
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
        //to convert html to content
        const strippedContent = formData.content.replace(/<[^>]+>/g,'');
        const response = await fetch('https://weddingwise-backend-f9kh.onrender.com/api/post/createpost',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                "token":localStorage.getItem("Token")
            },
            body:JSON.stringify({...formData, content:strippedContent})
        })
        const data = await response.json();
        if(!response.ok){
            setPublishError(data.message)
            return
        }
        else{
            setPublishError(null)
            navigate('/event')
        }
    } catch (error) {
       setPublishError('Something Went Wrong') 
    }
}

  return (
    <div className="flex p-2  flex-row md:flex-col md:items-center  bg-red-100 dark:bg-black ">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a Post</h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="felx flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Enter the Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) =>
              setFormdata({ ...formData, title: e.target.value })
            }
          />
          <br/>
          <Select
            onChange={(e) =>
              setFormdata({ ...formData, category: e.target.value })
            }
          >
            <option value="uncatergorized">Select Events</option>
            <option value="Business">Business</option>
            <option value="Events">Events</option>
            <option value="Lifestyle">Lifestyle</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToPink"
            size="sm"
            onClick={handleUploadImage}
            disabled={imageFileUploadProgress}
          >
            {imageFileUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={imageFileUploadError}
                  text={`${imageFileUploadProgress || 0}%`}
                />
              </div>
            ) : (
              "Upload Image"
            )}
          </Button>
        </div>
        {imageFileUploadError && (
          <Alert color="failure" icon={HiInformationCircle} className="mt-5">
            <span className="font-medium me-2">🥴OOPS!</span>
            {imageFileUploadError}
          </Alert>
        )}
        {formData.image && (
          <img
            src={formData.image}
            alt="Upload"
            className="w-full h-72 object-cover"
          />
        )}
        <ReactQuill
          theme="snow"
          placeholder="Write something......"
          required
          className="h-72 nb-12"
          onChange={(value) => {
            setFormdata({ ...formData, content: value });
          }}
        />
        <br/>
        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
        {publishError && (
          <Alert color="failure" icon={HiInformationCircle} className="mt-5">
            <span className="font-medium me-2">🥴OOPS!</span>
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
};

export default CreatePost;
