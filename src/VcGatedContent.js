import { Center, Image } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

function VcGatedContent() {
  const [meme, setMeme] = useState({});

  useEffect( () => {
    const fetchMeme = async () => {
      // get a random meme from the "https://api.imgflip.com/get_memes"
      const response = await fetch("https://meme-api.com/gimme");
      const data = await response.json();
      const url = data.preview[data.preview.length-1];
      setMeme(url);
      return true;
    };
    fetchMeme();
  }, []);

  
  return (
    <div style={{ color: "white" }} >
      <h1>👀 here's super secret genz treasure!</h1>
      <br/>
    <Center>
    <Image src={meme} height={"300px"} width={"300px"} />
    </Center>

      <br />
      <a
        href="https://github.com/oceans404/vc-verifier"
        target="_blank"
        rel="noreferrer"
      >
        Fork this code to build your own VC gated app, dapp, or website{" "}
        <ExternalLinkIcon />
      </a>
    </div>
  );
}

export default VcGatedContent;
