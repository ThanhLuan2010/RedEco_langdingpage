export default function Button({ text }: any) {
    return (
      <button
        type="submit"
        style={{
          background: "linear-gradient(107deg, #007BB0 -7.86%, #00366A 67.26%)",
          fontWeight: 500,
          fontFamily: "Montserrat",
        }}
        className="w-[200px] h-[48px] rounded-2xl text-white"
      >
        {text}
      </button>
    );
  }
  