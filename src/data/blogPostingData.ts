interface BlogPostingData {
  createdAt: number;
  category: "cpp" | "java" | "python";
  title: string;
  content: string;
}

export const blogPostingData: BlogPostingData[] = [
  {
    createdAt: 1665334210000,
    category: "cpp",
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
  { createdAt: 1665344210000, category: "cpp", title: "title2 c++", content: "content2 c++" },
  { createdAt: 1665354210000, category: "cpp", title: "title3 c++", content: "content3 c++" },
  { createdAt: 1665364200000, category: "cpp", title: "title4 c++", content: "content4 c++" },
  { createdAt: 1665364210000, category: "cpp", title: "title5 c++", content: "content5 c++" },
  { createdAt: 1665334210000, category: "java", title: "title1 Java", content: "content1 Java" },
  { createdAt: 1665344210000, category: "java", title: "title2 Java", content: "content2 Java" },
  { createdAt: 1665354210000, category: "java", title: "title3 Java", content: "content3 Java" },
  { createdAt: 1665364200000, category: "java", title: "title4 Java", content: "content4 Java" },
  { createdAt: 1665364210000, category: "java", title: "title5 Java", content: "content5 Java" },
  { createdAt: 1665334210000, category: "python", title: "title1 Python", content: "content1 Python" },
  { createdAt: 1665344210000, category: "python", title: "title2 Python", content: "content2 Python" },
  { createdAt: 1665354210000, category: "python", title: "title3 Python", content: "content3 Python" },
  { createdAt: 1665364200000, category: "python", title: "title4 Python", content: "content4 Python" },
  { createdAt: 1665364210000, category: "python", title: "title5 Python", content: "content5 Python" },
];
