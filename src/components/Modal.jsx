import Modal, { useModalState, useModalProps } from "react-simple-modal-provider";
import ModalBody from "./ModalBody";

export default ({ children }) => {
  const [isOpen, setOpen] = useModalState("HeroStatModal");
  // const {title } = useModalProps("HeroStatModal");



  return (
    <Modal id={"HeroStatModal"} consumer={children} isOpen={isOpen} setOpen={setOpen}>
      <div className="box" style={{ backgroundColor: "#494949e9" }}>
        <ModalBody />
      </div>
    </Modal>
  );
};


// export default () => {
//   const hero = useModalProps("ETCModal");

//   return <h1>{hero.localized_name}</h1>;  // Hello World
// };
