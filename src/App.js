import "./App.css";
import { useState } from "react";
import PolygonIDVerifier from "./PolygonIDVerifier";
import VcGatedContent from "./VcGatedContent";
import { Center, Card, Image, CardBody, Container, Text, Flex, Box } from "@chakra-ui/react";

function App() {
  const [genzProof, setGenzProof] = useState(false);
  return (
    <Center className="App">
      <Container>
        { genzProof ? (
          <VcGatedContent />
        ) : (
          <div>
            <Image src="pepe.png" />
            <Text fontSize='2xl' color={"white"} fontWeight={"bold"} margin={6} > 
            unlock the portal, dare to wander, where GenZ mystics' secrets ponder
            </Text>
          <Flex
            style={{
              background: "black",
              color: "white",
            }}

            justifyContent={"center"}
          >
            <Box>
              <PolygonIDVerifier
                serverURL={process.env.REACT_APP_VERIFICATION_SERVER_URL}
                credentialType={"KYCAgeCredential"}
                issuerLink={
                  "https://oceans404.notion.site/How-to-get-a-Verifiable-Credential-f3d34e7c98ec4147b6b2fae79066c4f6?pvs=4"
                }
                onVerificationResult={setGenzProof}
              />
            
            </Box>
          </Flex>
          </div>
        )}
      </Container>
    </Center>
  );
}

export default App;
