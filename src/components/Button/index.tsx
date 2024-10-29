import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Button({ text, isLoading }: any) {
  return (
    <button
      type="submit"
      style={{
        background: "linear-gradient(107deg, #007BB0 -7.86%, #00366A 67.26%)",
        fontWeight: 500,
        fontFamily: "Montserrat",
      }}
      className="w-[240px] h-[48px] rounded-2xl text-white"
    >
      <span className="mr-3">{text}</span>
      {isLoading && (
        <Spin
          style={{ color: "white" }}
          indicator={<LoadingOutlined spin />}
          size="small"
        />
      )}
    </button>
  );
}
