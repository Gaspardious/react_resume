
import styles from './contact.module.css'
import { FormProvider, useForm } from '../../components/form/FormProvider';


const ContactForm = () => {
  const { formData, handleChange } = useForm();


  return (
    <>
    <div className={styles.contact} >
      <form className={styles.contact__section} action="">
        <h2>CONTACT</h2>
          <label className={styles.contact_label} htmlFor="name">Name:</label>
          <input 
              className={styles.contact_input}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
          />

          <label className={styles.contact_label} htmlFor="email">Email:</label>
                  <input
                      className={styles.contact_input}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                  />

                  <label className={styles.contact_label} htmlFor="message">Message:</label>
                  <textarea
                      className={styles.contact_input}
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                  ></textarea>

              <button type="submit">Send</button>
           
        </form>
        </div>
</>
  )
}

function Contact() {
  return (
      <FormProvider>
          <ContactForm />
      </FormProvider>
  );
}

export default Contact

