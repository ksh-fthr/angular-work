import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'caseTransform',
    standalone: true,
})
export class CaseTransformPipe implements PipeTransform {
    transform(value: string, mode: 'upper' | 'lower' | 'capitalize'): string {
        if (!value) return '';

        switch (mode) {
            case 'upper':
                return value.toUpperCase();
            case 'lower':
                return value.toLowerCase();
            case 'capitalize':
                return value
                    .split(' ')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                    .join(' ');
            default:
                return value;
        }
    }
}
