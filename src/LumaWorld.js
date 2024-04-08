import { extend } from "@react-three/fiber";
import { LumaSplatsThree } from "@lumaai/luma-web";

extend({ LumaSplats: LumaSplatsThree });

export default function LumaWorld({ visible }) {
  return (
    <lumaSplats
      source="https://lumalabs.ai/capture/7c791d25-ef11-44b0-a7e5-439d4a14180b"
      enableThreeShaderIntegration={false}
      position={[-250, -113, 50]}
      scale={208.5}
      visible={visible}
    />
  );
}
