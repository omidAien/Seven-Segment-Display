import { Injectable } from "@angular/core";

@Injectable()
export class LEDGeneratorService {

    private TOP_LEFT:string = ".ditigal-member-top-left";
    private BOTTOM_LEFT:string = ".ditigal-member-bottom-left";
    private TOP_CENTER:string = ".ditigal-member-top-center";
    private MIDDLE_CENTER:string = ".ditigal-member-middle-center";
    private BOTTOM_CENTER:string = ".ditigal-member-bottom-center";
    private TOP_RIGHT:string = ".ditigal-member-top-right";
    private BOTTOM_RIGHT:string = ".ditigal-member-bottom-right";
    private TURN_ON_EDGE_CSS_CLASS:string = "active";

    private numberSign = {
        1: { TOP_LEFT: true,  BOTTOM_LEFT: true },
        2: { TOP_CENTER: true, TOP_RIGHT: true, MIDDLE_CENTER: true, BOTTOM_LEFT: true, BOTTOM_CENTER: true },
        3: { TOP_CENTER: true, TOP_RIGHT: true, MIDDLE_CENTER: true, BOTTOM_RIGHT: true, BOTTOM_CENTER: true },
        4: { TOP_LEFT: true, TOP_RIGHT: true, MIDDLE_CENTER: true, BOTTOM_RIGHT: true },
        5: { TOP_CENTER: true, TOP_LEFT: true, MIDDLE_CENTER: true, BOTTOM_RIGHT: true, BOTTOM_CENTER: true },
        6: { TOP_CENTER: true, TOP_LEFT: true, MIDDLE_CENTER: true, BOTTOM_RIGHT: true, BOTTOM_CENTER: true, BOTTOM_LEFT: true },
        7: { TOP_CENTER: true, BOTTOM_RIGHT: true, TOP_RIGHT: true },
        8: { TOP_LEFT: true, BOTTOM_LEFT: true, TOP_CENTER: true, MIDDLE_CENTER: true, BOTTOM_CENTER: true, TOP_RIGHT: true, BOTTOM_RIGHT: true },
        9: { TOP_LEFT: true, TOP_CENTER: true, MIDDLE_CENTER: true, BOTTOM_CENTER: true, TOP_RIGHT: true, BOTTOM_RIGHT: true }
    };

    private trunOnEdge(numberHTMLElementContainer: HTMLElement, edgeName: string) {
        numberHTMLElementContainer.querySelector(edgeName).classList.add(this.TURN_ON_EDGE_CSS_CLASS);
    }

    static resetNumberHTMLElementContainer(numberHTMLElementContainer, expression, cssClass) {
        const elements = expression ? numberHTMLElementContainer.querySelectorAll(`[class^=${expression}]`) : numberHTMLElementContainer;
        elements.forEach((el) => {
            el.classList.remove(cssClass);
            
            if ( el.hasAttribute("on") ) {
                el.removeAttribute("on");
            }
        });
    }

    private detectEdgeName(key:string) {

        let selectedEdge = "";

        if ( key === "TOP_LEFT" ) {
            selectedEdge = this.TOP_LEFT;
        }
        else if ( key === "BOTTOM_LEFT" ) {
            selectedEdge = this.BOTTOM_LEFT;
        }
        else if ( key === "TOP_CENTER" ) {
            selectedEdge = this.TOP_CENTER;
        }
        else if ( key === "MIDDLE_CENTER" ) {
            selectedEdge = this.MIDDLE_CENTER;
        }
        else if ( key === "BOTTOM_CENTER" ) {
            selectedEdge = this.BOTTOM_CENTER;
        }
        else if ( key === "TOP_RIGHT" ) {
            selectedEdge = this.TOP_RIGHT;
        }
        else if ( key === "BOTTOM_RIGHT" ) {
            selectedEdge = this.BOTTOM_RIGHT;
        }

        return selectedEdge;
    }

    trunOnNumber(numberHTMLElementContainer: HTMLDivElement, expression:string, number: number) {

        // 1. reset the number_HTMLElementContainer.
        LEDGeneratorService.resetNumberHTMLElementContainer(numberHTMLElementContainer, expression, this.TURN_ON_EDGE_CSS_CLASS);
        
        // 2. turn on the LED based on entered-number.
        const numberSpecification = this.numberSign[number];

        for (const [key, value] of Object.entries(numberSpecification) ) {

            const selectedEdge = this.detectEdgeName(key);
    
            this.trunOnEdge(numberHTMLElementContainer, selectedEdge);
        
        }

    }
    
}