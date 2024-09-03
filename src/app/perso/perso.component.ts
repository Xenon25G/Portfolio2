import { Component,OnInit} from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SkillComponent } from '../skill/skill.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perso',
  standalone: true,
  imports: [CommonModule,SkillComponent],
  templateUrl: './perso.component.html',
  styleUrl: './perso.component.css'
})
export class PersoComponent{
  private scrollposition = 0;
  private currentTranslation = 0;
  public smoother= 0;
  showAutreComponent = true;
  constructor(){
    gsap.registerPlugin();
    scrollTrigger: gsap.registerPlugin(ScrollTrigger);
  }
    ngOnInit(){
      gsap.fromTo(".astro", { 
        opacity: 0, 
        x:0,
      }, 
      {
  
          scrollTrigger: ".astro", 
          duration:3,
          x: 600,
         opacity: 1,
        });
        gsap.fromTo(".cracteristique", { 
          opacity: 0, 
          x: 800,
        }, 
        {
    
            scrollTrigger: ".cracteristique", 
            duration:3,
            x: 700,
           opacity: 1,
          });

          ScrollTrigger.saveStyles(".mobile, .desktop");
        
          ScrollTrigger.matchMedia({
            
            // desktop
            "(min-width: 800px)": function() {
              let tl = gsap.timeline({
                    scrollTrigger: {
                    trigger: ".gray",
                    scrub: 1,
                    end: "200%",
                    pin: true
                  }
                });
                
            
                tl.to(".Zclicker", {scale: 1.2})
                .to(".Zclicker", {scale: 1,x: 1010}),
                tl.to(".Jpo", {scale: 1.2})
                .to(".Jpo", {scale: 1,x: 1010}),
                tl.to(".Webdoc", {scale: 1.2})
                .to(".Webdoc", {scale: 1,x: 1010}),
                tl.to(".Flynt", {scale: 1.2})
                .to(".Flynt", {scale: 1,x: 1010}),
                tl.to(".Presentation", {scale: 1.2})
                .to(".Presentation", {scale: 1,x: 1010})
                      
                ;
                
                
                
              
              ;
            }, 
            
            // mobile
            "(max-width: 799px)": function() {
              // Any ScrollTriggers created inside these functions are segregated and get
              // reverted/killed when the media query doesn't match anymore. 
              let tl = gsap.timeline({ 
                  scrollTrigger:{
                    trigger: ".gray",
                    scrub: 1,
                    end: "200%",
                    pin: true
                  }
                });
              tl.to(".mobile", {scale: 2, rotation: 360})
                .to(".mobile", {scale: 1});
            }, 
            
            // all 
            "all": function() {
              gsap.fromTo(".astro", { 
                opacity: 0, 
                x:0,
              }, 
              {
          
                  scrollTrigger: ".astro", 
                  duration:3,
                  x: 100,
                 opacity: 1,
                });
                gsap.fromTo(".cracteristique", { 
                  opacity: 0, 
                  x: 800,
                }, 
                {
            
                    scrollTrigger: ".cracteristique", 
                    duration:3,
                    x: 200,
                   opacity: 1,
                  });
            }
            
          });
  }
  toggleAutreComponent() {
    this.showAutreComponent = !this.showAutreComponent;
  }
}
