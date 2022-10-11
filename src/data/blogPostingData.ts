export enum CategoryEnum {
  cpp = "C++",
  java = "Java",
  python = "Python",
}

export type Category = keyof typeof CategoryEnum;

const categories = Object.keys(CategoryEnum);

export const isCategory = (v: unknown): v is Category => {
  return typeof v === "string" && categories.includes(v);
};

export interface BlogPostingData {
  id: number;
  createdAt: number;
  title: string;
  content: string;
}

export const blogPostingData: Record<Category, BlogPostingData[]> = {
  cpp: [
    {
      id: 1,
      createdAt: 1665334210000,
      title: "title1 c++",
      content: `
  # 헤딩
  
  **굵게**
  
  일반 텍스트
  \`\`\`
    hello world
  \`\`\`
    
  *기울이기*
  
  글자 \`배경색\`
    
  > 인용문
  `,
    },
    { id: 2, createdAt: 1665344210000, title: "title2 c++", content: "content2 c++" },
    { id: 3, createdAt: 1665354210000, title: "title3 c++", content: "content3 c++" },
    { id: 4, createdAt: 1665364200000, title: "title4 c++", content: "content4 c++" },
    { id: 5, createdAt: 1665364210000, title: "title5 c++", content: "content5 c++" },
  ],
  java: [
    { id: 1, createdAt: 1665334210000, title: "title1 Java", content: "content1 Java" },
    { id: 2, createdAt: 1665344210000, title: "title2 Java", content: "content2 Java" },
    { id: 3, createdAt: 1665354210000, title: "title3 Java", content: "content3 Java" },
    { id: 4, createdAt: 1665364200000, title: "title4 Java", content: "content4 Java" },
    { id: 5, createdAt: 1665364210000, title: "title5 Java", content: "content5 Java" },
  ],
  python: [
    { id: 1, createdAt: 1665334210000, title: "title1 Python", content: "content1 Python" },
    { id: 2, createdAt: 1665344210000, title: "title2 Python", content: "content2 Python" },
    { id: 3, createdAt: 1665354210000, title: "title3 Python", content: "content3 Python" },
    { id: 4, createdAt: 1665364200000, title: "title4 Python", content: "content4 Python" },
    { id: 5, createdAt: 1665364210000, title: "title5 Python", content: "content5 Python" },
  ],
};
