import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 torder-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>FOREVER GROUP 1994 წლიდან ქართული ტანსაცმლის, ფეხსაცმლისა და აქსესუარების ბაზარზე არის წარმოდგენილი. ათწლეულების განმავლობაში, ჩვენ არა მხოლოდ ვქმნით მოდის განვითარებისთვის შესაბამის გარემოს, არამედ ვეხმარებით თითოეულ ადამიანს საკუთარი სტილისა და იდენტობის ჩამოყალიბებაში.</p>
        <p>წლების განმავლობაში FOREVER Group-მა არაერთი გამოწვევა დაძლია და ბაზრის მოთხოვნებთან შესაბამისობაში განაგრძობს განვითარებას. 
        </p>
        <b className='text-gray-800'>ჩვენი მისია</b>
        <p>ჩვენ მუდმივად ვეძებთ სიახლეებს, ვაგრძელებთ გაფართოებას, ვსწავლობთ საერთაშორისო გამოცდილებას და ვერგებით ახალი თაობის მოთხოვნებს. ასე გავხდით ინდუსტრიის ინოვატორი და ციფრული ვაჭრობის პიონერები საქართველოში, რაც მომხმარებლებისთვის მარტივ და კომფორტულ გამოცდილებას ქმნის.</p>
        </div>
      </div>
      <NewsLetterBox/>
   
    </div>
  )
}

export default About
