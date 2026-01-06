import React, { useContext, useEffect, useState } from "react";
import AuthContex from "../Contex/AuthContex";
import { useForm } from "react-hook-form";
import axios from "axios";

const Profile = () => {
  const { user, updateUsers } = useContext(AuthContex);
  const [edit, setEdit] = useState(false);
  const [preview, setPreview] = useState(user?.photoURL);

  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      name: user?.displayName,
    },
  });

  const watchPhoto = watch("photo");

  // ✅ preview must be in useEffect
  useEffect(() => {
    if (watchPhoto && watchPhoto[0]) {
      const file = watchPhoto[0];
      const url = URL.createObjectURL(file);
      setPreview(url);

      return () => URL.revokeObjectURL(url);
    }
  }, [watchPhoto]);

  const handleUpdate = async (data) => {
    try {
      let photoURL = user?.photoURL;
      const displayName = data.name;
      const file = data.photo?.[0];

      // ✅ Upload only if new image selected
      if (file) {
        const formData = new FormData();
        formData.append("image", file);

        const imgRes = await axios.post(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGE_API_KEY}`,
          formData
        );

        photoURL = imgRes.data.data.url;
      }

      // ✅ Firebase update
      await updateUsers({
        displayName,
        photoURL,
      });

      setEdit(false);
    } catch (error) {
      console.error("Profile update failed:", error);
    }
  };

  return (
    <div className="w-full  pt-30 px-20">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-xl mb-8">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="opacity-90">View and update your personal information</p>
      </div>

      <form onSubmit={handleSubmit(handleUpdate)}>
        <div className="bg-base-100 py-20  rounded-xl mx-auto shadow p-8 grid md:grid-cols-3 gap-8">

          {/* Avatar */}
        
           <div className="flex w-36 h-36 p-[3px] mx-auto   flex-col  gap-4 bg-gradient-to-r   from-indigo-500 to-purple-600 rounded-full">
              <img
              src={preview}
              className="w-36 h-36 rounded-full mx-auto object-cover"
              alt="Profile"
            />

            {edit && (
              <>
                <label
                  htmlFor="profilePhoto"
                  className="px-4 py-2  bg-green-400 text-white rounded-lg cursor-pointer"
                >
                  Change Photo
                </label>
                <input
                  id="profilePhoto"
                  type="file"
                  accept="image/*"
                  {...register("photo")}
                  className="hidden"
                />
              </>
            )}
           </div>
         

          {/* Info */}
          <div className="md:col-span-2 space-y-6">
            {!edit ? (
              <>
                <div>
                  <p className="text-sm opacity-70">Name</p>
                  <p className="text-lg font-semibold">{user?.displayName}</p>
                </div>
                <div>
                  <p className="text-sm opacity-70">Email</p>
                  <p className="text-lg font-semibold">{user?.email}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setEdit(true)}
                  className="btn btn-primary mt-4"
                >
                  Edit Profile
                </button>
              </>
            ) : (
              <>
                <div>
                  <p className="text-sm opacity-70 mb-1">Name</p>
                  <input
                    type="text"
                    {...register("name")}
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="flex gap-4 mt-4">
                  <button type="submit" className="btn btn-success">
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setEdit(false)}
                    className="btn btn-outline"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
