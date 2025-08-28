import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  // Team members data
  teamMembers = [
    {
      name: 'John Doe',
      position: 'Founder & CEO',
      description: 'Visionary leader with 10+ years in e-commerce, passionate about empowering businesses through technology.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      social: {
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Sarah Smith',
      position: 'Head of Design',
      description: 'Creative designer focused on user experience, bringing beautiful and intuitive interfaces to life.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      social: {
        twitter: '#',
        pinterest: '#'
      }
    },
    {
      name: 'Michael Lee',
      position: 'Lead Developer',
      description: 'Full-stack engineer with expertise in scalable systems, ensuring robust and efficient solutions.',
      image: 'https://randomuser.me/api/portraits/men/76.jpg',
      social: {
        github: '#',
        linkedin: '#'
      }
    }
  ];

  // Core values data
  coreValues = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries, exploring new technologies and methodologies to stay ahead of the curve and deliver cutting-edge solutions.',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      gradient: 'from-blue-500 to-purple-600',
      delay: '100'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of partnership, working closely with our clients and community to create solutions that truly meet their needs.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      gradient: 'from-green-500 to-teal-600',
      delay: '200'
    },
    {
      title: 'Global Impact',
      description: 'Our mission extends beyond profit - we\'re committed to creating positive change that helps businesses grow and communities thrive worldwide.',
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      gradient: 'from-orange-500 to-red-600',
      delay: '300'
    }
  ];

  // Stats data
  stats = [
    { value: '10K+', label: 'Happy Clients', delay: '100' },
    { value: '50+', label: 'Countries', delay: '200' },
    { value: '99.9%', label: 'Uptime', delay: '300' },
    { value: '24/7', label: 'Support', delay: '400' }
  ];

  // Mission and vision points
  missionPoints = [
    'Empower small businesses',
    'Simplify complex processes',
    'Drive innovation'
  ];

  visionPoints = [
    'Global marketplace access',
    'Seamless user experiences',
    'Sustainable growth'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Initialize AOS animations
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }

  // Method to handle CTA button clicks
  onGetStarted(): void {
    // Implement your get started logic here
    console.log('Get Started clicked');
  }

  onScheduleDemo(): void {
    // Implement your schedule demo logic here
    console.log('Schedule Demo clicked');
  }

  // Method to handle social media links
  onSocialClick(platform: string, url: string): void {
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  }

  // Method to scroll to team section
  scrollToTeam(): void {
    const element = document.getElementById('team-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Method to scroll to story section
  scrollToStory(): void {
    const element = document.getElementById('mission-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}