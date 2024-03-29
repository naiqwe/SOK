export class CreateCategoryDto {
  readonly name: string;
  readonly idParent?: number;
  readonly multiSelect: boolean;
}
