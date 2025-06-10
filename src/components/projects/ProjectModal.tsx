
import React from 'react';
import { Modal } from '@/components/ui/modal';
import { ModalContent } from './types';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: ModalContent;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, content }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={content.title}
    >
      {content.iframe && (
        <iframe
          src={content.iframe}
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
          className="rounded"
        />
      )}
    </Modal>
  );
};

export default ProjectModal;
