enum TrafficLight {
    Red = 'Red',
    Yellow = 'Yellow',
    Green = 'Green'
}

class TrafficLightRobot {
    private currentLight: TrafficLight = TrafficLight.Red;
    private lightElement: HTMLElement;
    private colorElement: HTMLElement;
    private timerElement: HTMLElement;
    private countDown: number = 10;

    constructor() {
        this.lightElement = document.getElementById('light')!;
        this.colorElement = document.getElementById('currentColor')!;
        this.timerElement = document.getElementById('timer')!;
    }

    private getNextLight(): TrafficLight {
        switch (this.currentLight) {
            case TrafficLight.Red:
                return TrafficLight.Green;
            case TrafficLight.Yellow:
                return TrafficLight.Red;
            case TrafficLight.Green:
                return TrafficLight.Yellow;
        }
    }

    private updateDisplay(): void {
        this.lightElement.style.backgroundColor = this.currentLight.toLowerCase();
        this.colorElement.textContent = `Current Color: ${this.currentLight}`;
        this.timerElement.textContent = `Next change in: ${this.countDown} seconds`;
    }

    public async run(): Promise<void> {
        while (true) {
            this.updateDisplay();

            for (this.countDown = 10; this.countDown > 0; this.countDown--) {
                this.updateDisplay();
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            this.currentLight = this.getNextLight();
        }
    }
}

const robot = new TrafficLightRobot();
robot.run().catch(console.error);