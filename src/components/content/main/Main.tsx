import React from 'react';
import {Container, Divider, Link, styled, Typography} from '@mui/material';
import { First } from './First';
import { Logos } from './Logos';
import { LinkWithArrow } from '../../LinkWithArrow';
import { ProductWithImage } from './ProductWithImage';
import { Products } from './Products';

export const Main = () => {
  return (
    <Container maxWidth="lg" sx={{pt: {xs: 11, md: 15}}}>
      <First />
      <Divider sx={{marginY: 5}} />
      <Logos />
      <Divider sx={{marginY: 5}} />
      <Container style={{textAlign: 'center'}}>
        <Typography variant="h3" align="center" mb={5}>Build experiences that drive engagement and increase transactions</Typography>
        <LinkWithArrow text="Watch a video" onClick={() => console.log('clicked')} />
      </Container>
      <Divider sx={{marginY: 5}} />
      <Products />
      <Divider sx={{marginY: 5}} />
      <div style={{lineHeight: 1.3}}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, laboriosam quidem! Velit consequatur odit aspernatur? Officia distinctio ad dicta soluta at maiores molestias iusto. Nisi, doloribus? Corporis non impedit laboriosam.
        Sint eius harum dicta provident soluta repellat aperiam distinctio, ad nihil sit esse, autem fugiat libero, eligendi iusto tempora beatae sequi doloremque labore cumque. Itaque facere temporibus aliquid quis fugiat?
        Quod doloremque fugiat fugit tenetur ipsa. Qui ipsa expedita aut fugit ratione ipsam pariatur cum tempore reiciendis. Consequuntur maxime eaque perspiciatis dicta laudantium commodi perferendis repudiandae repellendus eveniet, quae dolorum.
        Minima ullam molestias veritatis doloremque ea, quae praesentium amet non, ratione placeat provident tenetur incidunt explicabo ab obcaecati corrupti recusandae suscipit officiis earum neque odit quas ipsum veniam. Voluptate, saepe.
        Modi libero totam placeat, aperiam alias eveniet impedit odit reiciendis quidem, provident obcaecati, corporis assumenda doloribus enim cupiditate natus! Nobis perferendis necessitatibus enim? Totam id, debitis sapiente dicta dignissimos magnam.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, laboriosam quidem! Velit consequatur odit aspernatur? Officia distinctio ad dicta soluta at maiores molestias iusto. Nisi, doloribus? Corporis non impedit laboriosam.
        Sint eius harum dicta provident soluta repellat aperiam distinctio, ad nihil sit esse, autem fugiat libero, eligendi iusto tempora beatae sequi doloremque labore cumque. Itaque facere temporibus aliquid quis fugiat?
        Quod doloremque fugiat fugit tenetur ipsa. Qui ipsa expedita aut fugit ratione ipsam pariatur cum tempore reiciendis. Consequuntur maxime eaque perspiciatis dicta laudantium commodi perferendis repudiandae repellendus eveniet, quae dolorum.
        Minima ullam molestias veritatis doloremque ea, quae praesentium amet non, ratione placeat provident tenetur incidunt explicabo ab obcaecati corrupti recusandae suscipit officiis earum neque odit quas ipsum veniam. Voluptate, saepe.
        Modi libero totam placeat, aperiam alias eveniet impedit odit reiciendis quidem, provident obcaecati, corporis assumenda doloribus enim cupiditate natus! Nobis perferendis necessitatibus enim? Totam id, debitis sapiente dicta dignissimos magnam.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, laboriosam quidem! Velit consequatur odit aspernatur? Officia distinctio ad dicta soluta at maiores molestias iusto. Nisi, doloribus? Corporis non impedit laboriosam.
        Sint eius harum dicta provident soluta repellat aperiam distinctio, ad nihil sit esse, autem fugiat libero, eligendi iusto tempora beatae sequi doloremque labore cumque. Itaque facere temporibus aliquid quis fugiat?
        Quod doloremque fugiat fugit tenetur ipsa. Qui ipsa expedita aut fugit ratione ipsam pariatur cum tempore reiciendis. Consequuntur maxime eaque perspiciatis dicta laudantium commodi perferendis repudiandae repellendus eveniet, quae dolorum.
        Minima ullam molestias veritatis doloremque ea, quae praesentium amet non, ratione placeat provident tenetur incidunt explicabo ab obcaecati corrupti recusandae suscipit officiis earum neque odit quas ipsum veniam. Voluptate, saepe.
        Modi libero totam placeat, aperiam alias eveniet impedit odit reiciendis quidem, provident obcaecati, corporis assumenda doloribus enim cupiditate natus! Nobis perferendis necessitatibus enim? Totam id, debitis sapiente dicta dignissimos magnam.</p>
      </div>
    </Container>
  )
};