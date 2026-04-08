import { createSignal } from 'solid-js';

import { Hello } from '../../src';
import { Modal } from '../../src/ui/Modal';

export function App() {
    const [showModal, setShowModal] = createSignal(false);

    return (
        <>
            <Hello />
            <button onClick={() => setShowModal(true)} type='button'>
                Open Modal
            </button>

            <Modal onOpenChange={setShowModal} open={showModal()}>
                <Modal.Body>hi</Modal.Body>
                <Modal.Footer />
            </Modal>
        </>
    );
}
