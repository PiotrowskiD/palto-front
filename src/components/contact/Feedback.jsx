export default function Feedback({
  isFeedbackVisible,
  handleFeedbackVisibility,
  isFeedbackPositive,
}) {
  return (
    <div
      className={`feedback ${isFeedbackVisible ? "opacity-[1]" : "opacity-[0]"} transition-[0.3s] gap-[20px] items-baseline rounded-[16px] max-w-[587px] pt-[48px] pb-[32px] px-[32px] flex bg-[#FEFDFB] fixed bottom-[80px] right-[40px]`}
    >
      {isFeedbackPositive ? (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"min-w-[34px] min-h-[34px]"}
        >
          <path
            d="M14.6666 24.6663L26.4166 12.9163L24.0833 10.583L14.6666 19.9997L9.91659 15.2497L7.58325 17.583L14.6666 24.6663ZM16.9999 33.6663C14.6944 33.6663 12.5277 33.2288 10.4999 32.3538C8.47214 31.4788 6.70825 30.2913 5.20825 28.7913C3.70825 27.2913 2.52075 25.5275 1.64575 23.4997C0.770752 21.4719 0.333252 19.3052 0.333252 16.9997C0.333252 14.6941 0.770752 12.5275 1.64575 10.4997C2.52075 8.4719 3.70825 6.70801 5.20825 5.20801C6.70825 3.70801 8.47214 2.52051 10.4999 1.64551C12.5277 0.770508 14.6944 0.333008 16.9999 0.333008C19.3055 0.333008 21.4721 0.770508 23.4999 1.64551C25.5277 2.52051 27.2916 3.70801 28.7916 5.20801C30.2916 6.70801 31.4791 8.4719 32.3541 10.4997C33.2291 12.5275 33.6666 14.6941 33.6666 16.9997C33.6666 19.3052 33.2291 21.4719 32.3541 23.4997C31.4791 25.5275 30.2916 27.2913 28.7916 28.7913C27.2916 30.2913 25.5277 31.4788 23.4999 32.3538C21.4721 33.2288 19.3055 33.6663 16.9999 33.6663ZM16.9999 30.333C20.7221 30.333 23.8749 29.0413 26.4583 26.458C29.0416 23.8747 30.3333 20.7219 30.3333 16.9997C30.3333 13.2775 29.0416 10.1247 26.4583 7.54134C23.8749 4.95801 20.7221 3.66634 16.9999 3.66634C13.2777 3.66634 10.1249 4.95801 7.54159 7.54134C4.95825 10.1247 3.66659 13.2775 3.66659 16.9997C3.66659 20.7219 4.95825 23.8747 7.54159 26.458C10.1249 29.0413 13.2777 30.333 16.9999 30.333Z"
            fill="#DAB2ED"
          />
        </svg>
      ) : (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"min-w-[34px] min-h-[34px]"}
        >
          <path
            d="M11 25.333L17 19.333L23 25.333L25.3334 22.9997L19.3334 16.9997L25.3334 10.9997L23 8.66634L17 14.6663L11 8.66634L8.66671 10.9997L14.6667 16.9997L8.66671 22.9997L11 25.333ZM17 33.6663C14.6945 33.6663 12.5278 33.2288 10.5 32.3538C8.47226 31.4788 6.70837 30.2913 5.20837 28.7913C3.70837 27.2913 2.52087 25.5275 1.64587 23.4997C0.770874 21.4719 0.333374 19.3052 0.333374 16.9997C0.333374 14.6941 0.770874 12.5275 1.64587 10.4997C2.52087 8.4719 3.70837 6.70801 5.20837 5.20801C6.70837 3.70801 8.47226 2.52051 10.5 1.64551C12.5278 0.770508 14.6945 0.333008 17 0.333008C19.3056 0.333008 21.4723 0.770508 23.5 1.64551C25.5278 2.52051 27.2917 3.70801 28.7917 5.20801C30.2917 6.70801 31.4792 8.4719 32.3542 10.4997C33.2292 12.5275 33.6667 14.6941 33.6667 16.9997C33.6667 19.3052 33.2292 21.4719 32.3542 23.4997C31.4792 25.5275 30.2917 27.2913 28.7917 28.7913C27.2917 30.2913 25.5278 31.4788 23.5 32.3538C21.4723 33.2288 19.3056 33.6663 17 33.6663ZM17 30.333C20.7223 30.333 23.875 29.0413 26.4584 26.458C29.0417 23.8747 30.3334 20.7219 30.3334 16.9997C30.3334 13.2775 29.0417 10.1247 26.4584 7.54134C23.875 4.95801 20.7223 3.66634 17 3.66634C13.2778 3.66634 10.125 4.95801 7.54171 7.54134C4.95837 10.1247 3.66671 13.2775 3.66671 16.9997C3.66671 20.7219 4.95837 23.8747 7.54171 26.458C10.125 29.0413 13.2778 30.333 17 30.333Z"
            fill="#131313"
          />
        </svg>
      )}

      <p className={"font-[500] text-[32px]"}>
        {isFeedbackPositive
          ? "The message has been successfully sent! We will try to answer it as quickly as possible."
          : "Error! The message was not sent. Please fill out the form again."}
      </p>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"absolute right-[16px] top-[16px] cursor-pointer"}
        onClick={handleFeedbackVisibility}
      >
        <path
          d="M2.66659 23.6663L0.333252 21.333L9.66659 11.9997L0.333252 2.66634L2.66659 0.333008L11.9999 9.66634L21.3333 0.333008L23.6666 2.66634L14.3333 11.9997L23.6666 21.333L21.3333 23.6663L11.9999 14.333L2.66659 23.6663Z"
          fill="#565551"
        />
      </svg>
    </div>
  );
}
