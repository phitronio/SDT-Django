import { useForm } from "react-hook-form";
import ProfileForm from "../components/Dashboard/Profile/ProfileForm";
import { useState } from "react";
import ProfileButtons from "../components/Dashboard/Profile/ProfileButtons";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="card w-full max-w-2xl mx-auto bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-4">Profile Information</h2>

        <form action="">
          <ProfileForm
            register={register}
            errors={errors}
            isEditing={isEditing}
          />

          <ProfileButtons isEditing={isEditing} setIsEditing={setIsEditing} />
        </form>
      </div>
    </div>
  );
};

export default Profile;
