"use client"
import { useRouter } from 'next/router'


export default function CategoryDeatilsHome({ params }: { params: { categoryName: string } }) {
    return <div>My Post: {params.categoryName}</div>
}