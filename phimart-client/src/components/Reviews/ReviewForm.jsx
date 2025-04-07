import { useForm } from "react-hook-form";
import StarRating from "./StarRating";

const ReviewForm = ({ onSubmit }) => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const ratingValue = watch("ratings", 0);

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="label font-medium">
          <span className="label-text">Rating</span>
        </label>
        <StarRating
          onChange={(value) => setValue("ratings", value)}
          rating={ratingValue}
        />
        {errors.ratings && (
          <p className="text-error text-sm mt-1">Rating is required</p>
        )}
        <input type="hidden" {...register("ratings", { required: true })} />
      </div>

      <div className="form-control">
        <label className="label font-medium">
          <span className="label-text">Your Review</span>
        </label>
        <div>
          <textarea
            {...register("comment", { required: true })}
            className="textarea textarea-bordered min-h-[120px] focus:textarea-primary"
            placeholder="Share your experience with this product..."
          />
        </div>
        {errors.comment && (
          <p className="text-error text-sm mt-1">Comment is required</p>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full md:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="loading loading-spinner loading-xs mr-2"></span>
            Submitting...
          </>
        ) : (
          "Submit Review"
        )}
      </button>
    </form>
  );
};

export default ReviewForm;
