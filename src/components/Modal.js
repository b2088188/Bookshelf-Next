import { useState, useContext, createContext, cloneElement } from "react";
import { Portal } from "./Portal";
import styled from "styled-components/macro";
import { createPortal } from "react-dom";

const ModalContext = createContext();
ModalContext.displayName = "ModalContext";

function Modal({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const value = {
		isOpen,
		setIsOpen,
	};
	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
}

function ModalOpenButton({ children: child }) {
	const { setIsOpen } = useContext(ModalContext);
	return cloneElement(child, {
		onClick: () => setIsOpen(true),
	});
}

function ModalCloseButton({ children: child }) {
	const { setIsOpen } = useContext(ModalContext);
	return cloneElement(child, {
		onClick: () => setIsOpen(false),
	});
}

function ModalContent({ children }) {
	const { isOpen } = useContext(ModalContext);

	return <Portal isOpen={isOpen}>{children}</Portal>;
}

export { Modal, ModalOpenButton, ModalCloseButton, ModalContent };
