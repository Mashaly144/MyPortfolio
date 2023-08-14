import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
const ContactsPage = () => {
  return (
    <div>
      <div class='min-h-screen flex flex-col gap-1 text-center items-center justify-center'>
        <h1 class='font-DMSans font-bold text-heading text-[24px] md:text-[58px]'>
          For any questions please mail us:
        </h1>
        <a
          class='gradient_heading font-DMSans font-bold text-heading text-[24px] md:text-[58px]'
          href='mailto:abdallahmashaly144@gmail.com'
        >
          abdallahmashaly144@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactsPage;
