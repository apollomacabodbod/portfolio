import ContactMessage from "./_components/contac-message";
import ContactDetails from "./_components/contact-details";
import Contactform from "./_components/contact-form";
import ContactSubmit from "./_components/contact-submit";




export default function Contact() {
  return (
    <>

      <div className="flex flex-col min-h-screen max-w-[1200px] lg:mx-auto px-[1.25em]">

        {/* <ContactMessage/> */}
        {/* <ContactDetails/>
        <ContactSubmit/> */}
        <Contactform/>
      
      
      
      </div>


    </>
  );
}
