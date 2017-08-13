export class Ebook {
  constructor(
    public id: number,
    public name: string,
    public desc: string,
    public cover: string,
    public author: string,
    public isbn: string,
    public year: string,
    public pages: number,
    public language: string,
    public size: number,
    public format: string,
    public category: number,
    public rating: number
  ) {}
}

export class EbookSummary {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public cover: string,
    public rating: number
  ) {}
}
