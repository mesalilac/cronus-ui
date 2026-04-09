import { createSignal } from 'solid-js';

import { Button, Modal } from '~/ui';

import { Hello } from '../../src';

export function App() {
    const [showModal, setShowModal] = createSignal(false);

    return (
        <div>
            <Hello />
            <Button
                onClick={() => setShowModal(true)}
                type='button'
                variant='outline'
            >
                Open Modal
            </Button>

            <Modal onOpenChange={setShowModal} open={showModal()}>
                <Modal.Body>hi</Modal.Body>
                <Modal.Footer />
            </Modal>
        </div>
    );
}
