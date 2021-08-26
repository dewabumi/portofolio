import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.png';
import intelligence from '../img/intelligence.png';
import gamedev from '../img/game-dev.png';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'HTML'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'CSS'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Javascript'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'PHP'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'React JS'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'CodeIgniter'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Content Writer'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Web Design'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'I will help you to build a website that suits your needs.'}
                />
                <ServicesSection image={intelligence} title={'Content Writer'} 
                text={'I will create content for your website and your social media.'}
                />
                <ServicesSection image={gamedev} title={'Search Engine Optimization (SEO)'} 
                text={'I will help make your website always appears on the first page of search engines.'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;
