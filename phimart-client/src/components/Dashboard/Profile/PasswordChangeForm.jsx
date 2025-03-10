const PasswordChangeForm = ({ register, errors, watch, isEditing }) => {
  return (
    <div className="mt-3 space-y-3 pl-2 border-l-2 border-base-300">
      {/* Current Password */}
      <div className="form-control">
        <label className="label">Current Password</label>
        <div className="relative">
          <input
            className="input input-bordered bg-base-200 w-full pr-10"
            disabled={!isEditing}
            {...register("current_password", {
              required: "Current Password is Required",
            })}
          />
        </div>
        {errors.current_password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.current_password.message}
          </p>
        )}
      </div>
      {/* New Password */}
      <div className="form-control">
        <label className="label">New Password</label>
        <div className="relative">
          <input
            className="input input-bordered bg-base-200 w-full pr-10"
            disabled={!isEditing}
            {...register("new_password", {
              required: "New Password is Required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
        </div>
        {errors.new_password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.new_password.message}
          </p>
        )}
      </div>
      {/* Confirm New Password */}
      <div className="form-control">
        <label className="label">Confirm New Password</label>
        <div className="relative">
          <input
            className="input input-bordered bg-base-200 w-full pr-10"
            disabled={!isEditing}
            {...register("confirm_new_password", {
              validate: (value) =>
                value === watch("new_password") || "Passwords do not match",
            })}
          />
        </div>
        {errors.confirm_new_password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirm_new_password.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default PasswordChangeForm;
