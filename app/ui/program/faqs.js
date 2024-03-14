import FAQ from "./faqcomponent";



const faqs = [
  {
    "question": "What is Montessori?",
    "answers": `Montessori is an educational approach developed by Dr. Maria Montessori that emphasizes child-led learning, hands-on exploration, mixed-age classrooms, and a prepared environment to foster independence, creativity,
              and a love of learning in children.
              The educational approach emphasizes on acknowledging each child's unique
              pace and interests, cultivating confidence and intrinsic motivation and with self-
              paced learning`
  },
  {
    "question": "How does our kindergarten prepare children?",
    "answers": `Lakewood education goes beyond academics to prepare children for success in
                all areas of life. By fostering qualities such as independence, curiosity, and
                empathy, Montessori equips children with the skills and mind-set they need to
                thrive in an ever-changing world.
                Our programs empower each child to discover, learn, and thrive in a
                supportive and stimulating environment. We stand apart through our steady
                commitment to providing favourable programs that ignite curiosity, creativity,
                and a lifelong love for learning.`
  },
  {
    "question": "What is the typical daily schedule for kindergarten students?",
    "answers": `A typical daily schedule for kindergarten students often includes a mix of
                activities such as circle time, academic lessons (reading, math), playtime,
                snack or meal times, outdoor play, and rest or quiet time.`
  },
  {
    "question": "How does Lakewood involve parents?",
    "answers": `Parental involvement is encouraged, with parents participating in school
          activities, volunteering, and collaborating with teachers. Our Kindergarten
          encourages communication and any form of reaching out. Montessori
          education prioritizes open communication with parents, providing regular
          updates on their child's progress conducting frequent meetings and parent-
          teacher conferences. Parent involvement prepares children for success in all
          areas of life, fostering qualities like confidence, independence, resilience,
          curiosity, and empathy. Steps that would be more with the guardians/parents
          avid presence.`
  },

  {
    "question": "What are some interesting things about Montessori for parents?",
    "answers": `The child-led method of Montessori education promotes independence and
            self-sufficiency by focusing on the interests and curiosities of the children.
            Children are encouraged to express themselves via painting, music, dance, and
            imaginative play. The curriculum fosters the growth of the whole child, which
            includes their physical, mental, social, and emotional needs. By valuing and
            empowering each child in their surroundings, Montessori instructors respect
            their individual abilities and interests. Parental participation is encouraged;
            parents can volunteer, work with teachers, and take part in school events.
            Montessori education cultivates traits like independence, resilience, curiosity,
            and empathy in children, preparing them for success in all facets of life.`
  },
  {
    "question": "What do children learn in kindergarten?",
    "answers": `In kindergarten, children learn a variety of skills across different domains,
            including language and literacy (reading, writing, speaking, and listening),
            mathematics (number sense, counting, basic operations), science, social
            studies, art, music, physical education, and social-emotional skills.
            But also practical life skills that build independence, sensory learning to refine
            the five senses, and social/emotional skills. The emphasis is on hands-on, self-
            paced exploration across subjects to nurture the whole child academically and in
            character development.`
  },
  {
    "question": "What age group does the Montessori system cater to?",
    "answers": `Montessori education is typically offered for children as young as
            infants/toddlers through the end of elementary school (ages 0-12), although
            some Montessori schools offer programs for older children as well. Montessori
            approach provides a cohesive educational model from infancy through high
            school, catering to children's innate curiosity and desire to learn at every stage.`
  },
  {
    "question": "How can I help my child adjust to kindergarten?",
    "answers": `Prepare them emotionally by reading books about school, role-playing, and
            discussing the new routines. Build their independence by practicing self-care
            skills like using the bathroom and opening lunch items.
            Establish consistent routines at home for bedtime, morning rituals, etc. to mirror
            the kindergarten schedule. Attend orientation and meet the teacher to familiarize
            your child.
            Stay positive and avoid negativity about separating. On the first day, say an
            encouraging goodbye and leave promptly after settling them in.
            Be patient as they acclimate to new surroundings, friends, and activities. Ask
            open-ended questions about their day.`
  },
  {
    "question": "What should I do if my child is struggling in kindergarten?",
    "answers": `If your child is struggling in kindergarten, it's important to communicate with
                the teacher to understand the specific challenges and explore strategies for
                support. The teacher may offer additional resources, interventions, or
                accommodations to help your child succeed. Working collaboratively with the
                school and seeking outside support if needed can help address your child's
                needs effectively.`
  },
  {
    "question": "How can I stay involved in my child's kindergarten education?",
    "answers": `Parents can stay involved in their child's kindergarten education by
              communicating regularly with the teacher, attending school events and
              parent-teacher conferences, volunteering in the classroom or school,
              participating in parent education workshops or committees, and supporting
              learning at home through reading, homework help, and enrichment activities.
              Being engaged and proactive in your child's education can strengthen the
              home-school partnership and support your child's success in kindergarten and
              beyond.`
  },
  {
    "question": "What extracurricular activities or enrichment programs are available for kindergarten students?",
    "answers": `Extracurricular activities and enrichment programs for kindergarten students
              may include art, music, physical education, foreign language instruction,
              STEM activities, gardening, and community service projects, among others.`
  },
  {
    "question": "What is the age range for children attending kindergarten?",
    "answers": `The age range for children attending kindergarten typically falls between 4 to
            6 years old, although this can vary depending on the country or educational
            system.`
  }
]





function FAQSection() {
  return (
    <div className="w-full md:px-20 lg:px-72 mx-auto my-10 md:my-40 px-2">
      <h1 className='font-bold text-3xl md:text-6xl py-8'>FAQ's</h1>
      {faqs.map((faq, index) => (
        <FAQ key={index} faq={faq}  />
      ))}
    </div>
  );
}

export default FAQSection;



