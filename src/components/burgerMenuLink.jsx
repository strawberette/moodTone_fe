import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import MobileMenu from "./burgerMenu";

const BurgerMenuLink = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
        <div className="burgerMenu" onClick={() => setOpen(true)}>
        <ul className="burgerMenuLines">
          <li className="burgerLines blackLines"></li>
          <li className="burgerLines whiteLines"></li>
          <li className="burgerLines blackLines"></li>
          <li className="burgerLines whiteLines"></li>
          <li className="burgerLines blackLines"></li>
        </ul>
      </div>
      <Modal open={open} onClose={()=> setOpen(false)}>
        <MobileMenu />
      </Modal>
        </>
        
    );
};

export default BurgerMenuLink;