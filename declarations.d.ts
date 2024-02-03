declare module "*.module.css" {
    interface IClasses {
        [classes: string]: string
    }
    const classes: IClasses;
    export = classes;
}

declare module "*.module.scss" {
    interface IClasses {
        [classes: string]: string
    }
    const classes: IClasses;
    export = classes;
}
