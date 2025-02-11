import Modal from '../shared/Modal';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Privacy Policy">
      <div className="space-y-6">
        <section>
          <h4 className="text-xl font-semibold mb-3">1. Information We Collect</h4>
          <p>
            We collect information that you provide directly to us, including when you:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Contact us through our website</li>
            <li>Subscribe to our newsletter</li>
            <li>Request a consultation</li>
            <li>Use our services</li>
          </ul>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-3">2. How We Use Your Information</h4>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Provide and maintain our services</li>
            <li>Respond to your requests and inquiries</li>
            <li>Send you technical notices and updates</li>
            <li>Improve our services and develop new features</li>
          </ul>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-3">3. Information Sharing</h4>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-3">4. Data Security</h4>
          <p>
            We implement appropriate technical and organizational measures to maintain the security of your personal information.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-3">5. Your Rights</h4>
          <p>
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to our use of your information</li>
          </ul>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-3">6. Contact Us</h4>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@apexlabs.com
          </p>
        </section>
      </div>
    </Modal>
  );
} 