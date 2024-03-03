import React from "react";

// A reusable button component
const DownloadButton = ({ children }) => (
  <button className="justify-center self-start px-8 py-6 mt-14 text-lg font-semibold text-white whitespace-nowrap bg-emerald-800 rounded-3xl max-md:px-5 max-md:mt-10">
    {children}
  </button>
);

// Main component
function EnrollmentProcess () {
  return (
    <main className="flex flex-col p-40 text-black ">
      <header className="w-full text-5xl font-black max-md:max-w-full max-md:text-4xl">
        Enrollment process
      </header>
      <section className="mt-14 w-full text-xl max-md:mt-10 max-md:max-w-full">
        <p>
          Explore Our Kindergarten: Take a tour of our kindergarten and learn more about our program, curriculum, and values.
        </p>
        <p>
          Check Eligibility: Ensure your child meets the age eligibility requirements for enrollment. Typically, children must be at least 4 or 5 years old by a certain date to enroll in kindergarten.
        </p>
        <p>
          Complete Online Application: Fill out our online enrollment application form. Provide basic information about your child, your family, and your contact details.
        </p>
        <p>
          Submit Required Documents: Upload or submit required documents, including:
          <br />
          - Child's birth certificate or proof of age
          <br />
          - Proof of residency (e.g., utility bill or lease agreement)
          <br />
          - Immunization records or exemption forms
          <br />
          - Any legal guardianship documents (if applicable)
        </p>
        <p>
          Schedule an Enrollment Meeting: After reviewing your application, we'll contact you to schedule an enrollment meeting. This meeting may be conducted virtually or in person and allows us to get to know your child and family better.
        </p>
        <p>
          Attend Enrollment Meeting: Meet with our enrollment team to discuss your child's educational goals, ask questions about our program, and finalize enrollment details.
        </p>
        <p>
          Pay Enrollment Fee: Pay the enrollment fee to secure your child's spot in our kindergarten. Details about the enrollment fee will be provided during the enrollment meeting.
        </p>
        <p>
          Receive Enrollment Confirmation: Once all requirements are met and the enrollment fee is paid, you'll receive confirmation of your child's enrollment in our kindergarten.
        </p>
        <p>
          Attend Orientation Session: Prior to the start of the school year, attend an orientation session to meet the teacher, tour the classroom, and learn about important procedures and expectations.
        </p>
        <p>
          Prepare for the First Day: Help your child prepare for their first day of kindergarten by discussing what to expect, practicing morning routines, and gathering any required supplies or materials.
        </p>
        <p>
          Requirements for Enrollment:
          <br />
          Child must be at least 4 or 5 years old by [specific date].
          <br />
          Completed online enrollment application form.
          <br />
          Submission of required documents, including birth certificate, proof of residency, immunization records, and any legal guardianship documents.
          <br />
          Attendance at an enrollment meeting with our team.
          <br />
          Payment of the enrollment fee to secure your child's spot.
        </p>
      </section>
      <DownloadButton>Download form</DownloadButton>
    </main>
  );
};

export default EnrollmentProcess;
