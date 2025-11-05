import { classNames } from './classNames';

describe('', () => {
    it('test static param', () => {
        expect(classNames('class')).toBe('class');
    });

    it('test mods', () => {
        expect(
            classNames('class', {
                hidden: true,
                hovered: true,
            }),
        ).toBe('class hidden hovered');
    });

    it('test mods with one mode', () => {
        expect(
            classNames('class', {
                hidden: true,
                hovered: undefined,
            }),
        ).toBe('class hidden');
    });

    it('test additional param', () => {
        expect(classNames('class', {}, ['additional'])).toBe('class additional');
    });
});
