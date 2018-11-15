export class Todo {
    

    constructor (
        public title: string,
        public content: string,
        public important: boolean
    ){
        
    }

    public toggle() {
        this.important = !this.important;
    }

    public isImportant(): boolean {
        return this.important;
    }
}
