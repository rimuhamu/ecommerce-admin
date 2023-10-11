'use client';

import { Heading } from '@/components/Heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { CategoryColumn, columns } from './Columns';
import { DataTable } from '@/components/DataTable';
import { ApiList } from '@/components/ApiList';

interface CategoryClientProps {
  data: CategoryColumn[];
}

export const CategoryClient = ({ data }: CategoryClientProps) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Categories (${data.length})`}
          description='Manage categories for your store'
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/categories/new`)}>
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        columns={columns}
        data={data}
        searchKey='name'
      />
      <Heading
        title='API'
        description='Api calls for Categories'
      />
      <Separator />
      <ApiList
        entityName='categories'
        entityIdName='categoryId'
      />
    </>
  );
};