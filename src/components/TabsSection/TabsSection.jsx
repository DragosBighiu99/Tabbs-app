import { useState } from 'react';
import './TabsSection.css';
import placeholder from '../../assets/placeholder.jpg';
import initialTabs from './initialTabs';

const TabsSection = () => {
    // atunci cand vrem ca o componenta sa se re-randeze dupa ce valoarea unei variabile se schimba, punem acea variabila in state
    let [currentTab, setCurrentTab] = useState(0);
    let [tabs, setTabs] = useState(initialTabs);
    let [editMode, setEditMode] = useState(false);

    const handleTabChange = (e) => {
        const buttonValue = parseInt(e.target.getAttribute('value'));
        
       setCurrentTab(buttonValue);
    };

    const addNewTab = () => {
        const newTabs = [ ...tabs ];

        newTabs[newTabs.length - 1].isNew = false;

        const newTab = {
            title: `Tab ${newTabs.length + 1}`,
            text: 'Lorem 1111111111, ipsum dolor sit amet consectetur adipisicing elit. Et quasi quae harum perferendis quas iusto iure, facere quia at officia voluptatum vel eius? Dolor aperiam harum vel nemo iste nihil?',
            image: '',
            alt: '',
            isNew: true
        };

        newTabs.push(newTab);

        setTabs(newTabs);
    }

    const handleEditMode = () => {
        setEditMode(true);
    }

    return (
        <section className='tabs-section'>
            <div className='tabs-container'>
                {tabs.map((tab, index) => (
                    <div key={tab.title} className='tab-button-container'>
                        <button className={`tab-button ${index === currentTab ? 'active-button' : ''}`} value={index} onDoubleClick={handleEditMode} onClick={handleTabChange}> 
                            {tab.title} 
                        </button>
                        {tab.isNew === true ? (<p className='new-tab-label'> New </p>) : null}
                    </div>
                ))}
                <button className='new-tab-button' onClick={addNewTab}> + </button>
            </div>
            <div className='tab-content'>
                <p> {tabs[currentTab].text} </p>
                <img src={tabs[currentTab].image === '' ? placeholder : tabs[currentTab].image} className='tab-image' />
                {tabs[currentTab].image === '' ? (<p> ({tabs[currentTab].alt}) </p>) : null}
            </div>
        </section>
    )
};

export default TabsSection;