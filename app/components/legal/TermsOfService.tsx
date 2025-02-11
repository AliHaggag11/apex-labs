import Modal from '../shared/Modal';

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsOfService({ isOpen, onClose }: TermsOfServiceProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Terms of Service">
      <div className="space-y-6">
        <section>
          <h4 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h4>
          <p>
            By accessing and using our services, you accept and agree to be bound by the terms and conditions of this agreement.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-3">2. Services Description</h4>
          <p>
            Apex Labs provides digital transformation and technology consulting services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-3">3. User Responsibilities</h4>
          <p>
            You agree to:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Provide accurate and complete information</li>
            <li>Maintain the confidentiality of your account</li>
            <li>Use our services in compliance with applicable laws</li>
            <li>Not engage in any unauthorized use of our services</li>
          </ul>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-3">4. Intellectual Property</h4>
          <p>
            All content, features, and functionality of our services are owned by Apex Labs and are protected by international copyright, trademark, and other intellectual property laws.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-3">5. Limitation of Liability</h4>
          <p>
            Apex Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-3">6. Termination</h4>
          <p>
            We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any breach of these Terms of Service.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-3">7. Changes to Terms</h4>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this site.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-3">8. Contact Information</h4>
          <p>
            For any questions about these Terms of Service, please contact us at legal@apexlabs.com
          </p>
        </section>
      </div>
    </Modal>
  );
} 