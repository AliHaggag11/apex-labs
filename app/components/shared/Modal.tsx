import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FaTimes } from 'react-icons/fa'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform rounded-2xl bg-white dark:bg-dark-card shadow-xl transition-all max-h-[calc(100vh-2rem)] flex flex-col">
                <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-dark-border">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold leading-6 text-gray-900 dark:text-dark-text"
                  >
                    {title}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 dark:text-dark-muted dark:hover:text-dark-text transition-colors"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-6 prose dark:prose-invert max-w-none">
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 