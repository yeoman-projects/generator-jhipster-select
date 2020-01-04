const CONSTANTS = require('./constants/constants');
const DEMO_CONSTANTS = require('./constants/demo-constants');

const chalk = require('chalk');
const packagejs = require('../../package.json');
const semver = require('semver');
const shelljs = require('shelljs');
const fs = require('fs');
const BaseGenerator = require('generator-jhipster/generators/generator-base');
const jhipsterConstants = require('generator-jhipster/generators/generator-constants');

const CLIENT_MAIN_SRC_DIR = jhipsterConstants.CLIENT_MAIN_SRC_DIR;
const CLIENT_TEST_SRC_DIR = jhipsterConstants.CLIENT_TEST_SRC_DIR;

/* eslint-disable consistent-return */
const chalk = require('chalk');
const EntityClientGenerator = require('generator-jhipster/generators/entity-client');

module.exports = class extends EntityClientGenerator {
    constructor(args, opts) {
        super(args, { fromBlueprint: true, ...opts }); // fromBlueprint variable is important

        if (!this.jhipsterContext) {
            this.error(`This is a JHipster blueprint and should be used only like ${chalk.yellow('jhipster --blueprint select')}`);
        }
    }

    get initializing() {
        /**
         * Any method beginning with _ can be reused from the superclass `EntityClientGenerator`
         *
         * There are multiple ways to customize a phase from JHipster.
         *
         * 1. Let JHipster handle a phase, blueprint doesnt override anything.
         * ```
         *      return super._initializing();
         * ```
         *
         * 2. Override the entire phase, this is when the blueprint takes control of a phase
         * ```
         *      return {
         *          myCustomInitPhaseStep() {
         *              // Do all your stuff here
         *          },
         *          myAnotherCustomInitPhaseStep(){
         *              // Do all your stuff here
         *          }
         *      };
         * ```
         * 3. Partially override a phase, this is when the blueprint gets the phase from JHipster and customizes it.
         */
        const phaseFromJHipster = super._initializing();
        const myCustomPhaseSteps = {
            readPackageJson() {
                const fromPath = 'package.json';
                this.libAngularVersion = CONSTANTS.ANGULAR_VERSION;
                this.libAngularCDKVersion = CONSTANTS.ANGULAR_CDK_VERSION;
                this.libAngularAnimationsVersion = CONSTANTS.ANGULAR_ANIMATIONS_VERSION;
                if (shelljs.test('-f', fromPath)) {
                    const fileData = this.fs.readJSON(fromPath);
                    if (fileData && fileData.dependencies) {
                        if (fileData.dependencies['@angular/common']) {
                            this.libAngularVersion = fileData.dependencies['@angular/common'];
                        }
                        if (fileData.dependencies['@angular/cdk']) {
                            this.libAngularScrollingVersion = fileData.dependencies['@angular/cdk'];
                        }
                        if (fileData.dependencies['@angular/animations']) {
                            this.libAngularAnimationsVersion = fileData.dependencies['@angular/animations'];
                        }
                        if (fileData.dependencies.primeng) {
                            this.libPrimeNgVersion = fileData.dependencies.primeng;
                        }
                        if (fileData.dependencies['primeng-extensions']) {
                            this.libPrimeNgExtensionsVersion = fileData.dependencies['primeng-extensions'];
                        }

                        if (fileData.dependencies['chart.js']) {
                            this.libChartJsVersion = fileData.dependencies['chart.js'];
                        }
                        if (fileData.dependencies.primeicons) {
                            this.libPrimeIconsVersion = fileData.dependencies.primeicons;
                        }
                        if (fileData.dependencies.primeflex) {
                            this.libPrimeFlexVersion = fileData.dependencies.primeflex;
                        }

                        if (fileData.dependencies['@fullcalendar/core']) {
                            this.libFullcalendarCoreVersion = fileData.dependencies['@fullcalendar/core'];
                        }

                        if (fileData.dependencies['@fullcalendar/daygrid']) {
                            this.libFullcalendarDaygridVersion = fileData.dependencies['@fullcalendar/daygrid'];
                        }

                        if (fileData.dependencies['@fullcalendar/interaction']) {
                            this.libFullcalendarInteractionVersion = fileData.dependencies['@fullcalendar/interaction'];
                        }

                        if (fileData.dependencies['@fullcalendar/timegrid']) {
                            this.libFullcalendarTimegridVersion = fileData.dependencies['@fullcalendar/timegrid'];
                        }

                        if (fileData.dependencies.quill) {
                            this.libQuillVersion = fileData.dependencies.quill;
                        }

                        if (fileData.dependencies['chart.js']) {
                            this.libChartJsVersion = fileData.dependencies['chart.js'];
                        }
                    }
                }
            },
            displayLogo() {
                // Have Yeoman greet the user.
                this.log('');
                this.log(`${chalk.yellow('███████╗███████╗██╗     ███████╗ ██████╗████████╗███╗   ██╗ ██████╗ ')}`);
                this.log(`${chalk.yellow('██╔════╝██╔════╝██║     ██╔════╝██╔════╝╚══██╔══╝████╗  ██║██╔════╝ ')}`);
                this.log(`${chalk.yellow('███████╗█████╗  ██║     █████╗  ██║        ██║   ██╔██╗ ██║██║  ███╗')}`);
                this.log(`${chalk.yellow('╚════██║██╔══╝  ██║     ██╔══╝  ██║        ██║   ██║╚██╗██║██║   ██║')}`);
                this.log(`${chalk.yellow('███████║███████╗███████╗███████╗╚██████╗   ██║   ██║ ╚████║╚██████╔╝')}`);
                this.log(`${chalk.yellow('╚══════╝╚══════╝╚══════╝╚══════╝ ╚═════╝   ╚═╝   ╚═╝  ╚═══╝ ╚═════╝ ')}`);
            },
            myCustomInitPhaseStep() {
                // Do all your stuff here
            },
        };
        return Object.assign(phaseFromJHipster, myCustomPhaseSteps);
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._initializing();
    }

    get prompting() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._prompting();
    }

    get configuring() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._configuring();
    }

    get default() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._default();
    }

    get writing() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._writing();
    }

    get install() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._install();
    }

    get end() {
        // Here we are not overriding this phase and hence its being handled by JHipster
        return super._end();
    }
};
