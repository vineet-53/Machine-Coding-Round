export default function FormButton(props) {
  const { success, error } = props;
  if (success || error) {
    return (
      <button
        disabled={true}
        className={`${success && "bg-[#23CF9B]"} ${error && "bg-[#EB2D5B]"} rounded-lg text-otp-secondary py-3 px-5 w-full `}
      >
        {success && "Verified"}
        {error && "Verification Failed"}
      </button>
    );
  }
  return (
    <button
      type="submit"
      className="hover:border-otp-secondary border-2 bg-otp-tertiary rounded-lg text-otp-secondary py-3 px-5 w-full"
    >
      Verify Account
    </button>
  );
}
