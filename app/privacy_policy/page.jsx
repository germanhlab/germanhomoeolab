export default function PrivacyPolicy() {
  return (
    <div style={styles.container}>
         
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.subtitle}>German Homoeo Lab</p>
        <p style={styles.date}>Effective Date: March 7, 2026</p>
      </div>

      {/* Content */}
      <div style={styles.card}>
        <p style={styles.intro}>
          This Privacy Policy is governed by the provisions of the 
          <strong> Information Technology Act, 2000 </strong> and the 
          <strong> SPDI (Sensitive Personal Data or Information) Rules, 2011 of India.</strong>
        </p>

        <p>
          At <strong>German Homoeo Lab</strong>, we are committed to protecting the privacy
          and confidentiality of our patients and website visitors. This policy explains how
          we collect, use, and safeguard your personal and health information.
        </p>

        <Section title="1. Information We Collect">
          <ul>
            <li>
              <strong>Personal Identification:</strong> Name, age, gender, and contact details
              (phone number, email address, and postal address).
            </li>
            <li>
              <strong>Health Information:</strong> Medical history, current symptoms, previous
              treatments, and lifestyle details provided during consultations.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, and cookies used to
              improve website functionality and user experience.
            </li>
          </ul>
        </Section>

        <Section title="2. Purpose of Data Collection">
          <ul>
            <li>Providing homeopathic consultations and clinical services.</li>
            <li>Managing appointments and sending reminders.</li>
            <li>Responding to your inquiries and feedback.</li>
            <li>Maintaining internal medical records as required by clinical regulations.</li>
            <li>Processing payments for services or medicines.</li>
          </ul>
        </Section>

        <Section title="3. Consent and Confidentiality">
          <p>
            By using our website or providing your details, you consent to the collection and
            use of your data as described in this policy.
          </p>

          <ul>
            <li>
              <strong>Doctor-Patient Confidentiality:</strong> Your health records are treated
              with strict professional confidentiality.
            </li>
            <li>
              <strong>No Third-Party Sharing:</strong> We do not sell, rent, or trade your
              personal or medical data with marketing companies. Data is only shared with
              authorized clinical staff involved in your treatment.
            </li>
          </ul>
        </Section>

        <Section title="4. Data Security">
          <p>
            We implement reasonable security practices to protect your data from unauthorized
            access, loss, or misuse.
          </p>

          <ul>
            <li>
              <strong>Encryption:</strong> Secure protocols are used for data transmission.
            </li>
            <li>
              <strong>Access Control:</strong> Only authorized personnel have access to
              sensitive medical records.
            </li>
            <li>
              <strong>Retention:</strong> Data is stored only as long as required for treatment
              or as required under Indian law.
            </li>
          </ul>
        </Section>

        <Section title="5. Your Rights">
          <ul>
            <li>Review and update your personal information.</li>
            <li>
              Withdraw your consent for data processing (this may affect our ability to
              provide treatment).
            </li>
            <li>Request a copy of your medical records.</li>
          </ul>
        </Section>

        <Section title="6. Third-Party Links">
          <p>
            Our website may contain links to external websites. We are not responsible for the
            privacy practices or content of those websites.
          </p>
        </Section>

        <Section title="7. Grievance Officer">
          <p>
            In accordance with the Information Technology Act, 2000, if you have any questions
            or grievances regarding your privacy, please contact our Grievance Officer:
          </p>

          <div style={styles.contactBox}>
            <p><strong>Attn:</strong> Grievance Officer, German Homoeo Lab</p>
            <p><strong>Phone:</strong> 9002866135</p>
            <p><strong>Operating Hours:</strong> 9:00 AM – 8:00 PM</p>
          </div>
        </Section>

        <Section title="8. Changes to This Policy">
          <p>
            We reserve the right to update this Privacy Policy. Any changes will be posted on
            this page with an updated <strong>"Effective Date"</strong>.
          </p>
        </Section>

      </div>
    </div>
  );
}


function Section({ title, children }) {
  return (
    <div style={{ marginTop: "35px" }}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <div style={styles.sectionContent}>{children}</div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "60px 20px",
    fontFamily: "system-ui, -apple-system, Arial",
    color: "#333",
    lineHeight: "1.7"
  },

  header: {
    textAlign: "center",
    marginBottom: "40px"
  },

  title: {
    fontSize: "40px",
    fontWeight: "700",
    marginBottom: "5px"
  },

  subtitle: {
    fontSize: "22px",
    fontWeight: "500",
    color: "#444"
  },

  date: {
    fontSize: "14px",
    color: "#777",
    marginTop: "10px"
  },

  card: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
  },

  intro: {
    fontSize: "16px",
    marginBottom: "20px"
  },

  sectionTitle: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "10px"
  },

  sectionContent: {
    fontSize: "15px"
  },

  contactBox: {
    marginTop: "10px",
    padding: "15px",
    background: "#f4f6f8",
    borderRadius: "6px"
  }
};