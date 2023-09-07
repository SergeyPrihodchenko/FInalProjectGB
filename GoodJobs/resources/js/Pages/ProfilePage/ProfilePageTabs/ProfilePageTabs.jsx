import React from 'react';
//import PropTypes from 'prop-types'
import s from '../ProfilePageTabs/ProfilePageTabs.module.css';
import AppText from '@/Shared/ui/AppText/AppText';
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import ProfilePageForm from '../ProfilePageForm/ProfilePageForm';
  
function ProfilePageTabs(props) {
  
  <ProfilePageForm/>

  let [categories] = useState({
    'Личные данные': [
      {
        id: 1,
        desc: ProfilePageForm,
      },
    ],

    'Нежелательное': [
      {
        id: 1,
        desc: 'Эта страница Нежелательное. Она пуста',
      },
    ],

     'Изображения': [
      {
        id: 1,
        desc: 'Эта страница Изображения. Она пуста',
      },  
    ],

    'Рассылки': [
      {
        id: 1,
        desc: 'Эта страница Рассылки. Она пуста',
      },  
    ],
  })
  
  
  return (
    <nav className={s.navProfilePage}>
      <Tab.Group>
        <Tab.List>
          <navList>
            <div className={s.navSettings}>
              {Object.keys(categories).map((category) => ( 
                <Tab
                  key={category}>
                    <AppText size={'m'} className={s.navLink} title={category}/>
                  </Tab>
                ))}
              </div>
          </navList>
        </Tab.List>

        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel 
              key={idx}>
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}>
                    <AppText size={'l'} className={s.navLink} text={post.desc}/>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </nav>          
  )
}


//ProfilePage.propTypes = {}

export default ProfilePageTabs