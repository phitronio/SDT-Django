const ProfileButtons = ({ isEditing, setIsEditing, isSubmitting }) => {
  return (
    <div className="flex justify-center pt-4">
      {isEditing ? (
        <div className="space-x-4">
          <button
            type="submit"
            className="btn btn-primary px-8"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving" : "Save Changes"}
          </button>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="btn btn-primary px-8"
          onClick={() => setIsEditing(true)}
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default ProfileButtons;
