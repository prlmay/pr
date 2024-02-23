import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { CategoryComponent } from './pages/category/category.component';
import { AuthorComponent } from './pages/author/author.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacePolicyComponent } from './pages/privace-policy/privace-policy.component';
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import { LayoutComponent } from './layout/layout.component';
import { BussinessComponent } from './components/bussiness/bussiness.component';
import { StartupComponent } from './components/startup/startup.component';
import { EcanomyComponent } from './components/ecanomy/ecanomy.component';
import { TechnologyComponent } from './components/technology/technology.component';


export const routes: Routes = [
    {
      path: 'layout',
      component: LayoutComponent,
      children: [
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'home',
          component: HomeComponent,
          title: 'Home'
        },
        {
          path: 'blog',
          component: BlogComponent,
          title: 'Blog'
        },
        {
          path: 'blog_post',
          component: BlogPostComponent,
          title: 'Blog Post'
        },
        {
          path: 'about',
          component: AboutComponent,
          title: 'About'
        },
        {
          path: 'category',
          component: CategoryComponent,
          title: 'Category',
          // children: [
          //   {
          //     path: 'business',
          //     component: BussinessComponent
          //   },
          //   {
          //     path: 'startUp',
          //     component: StartupComponent
          //   },
          //   {
          //     path: 'economy',
          //     component: EcanomyComponent
          //   },
          //   {
          //     path: 'technology',
          //     component: TechnologyComponent
          //   }
          // ]
        },
        {
          path: 'author',
          component: AuthorComponent,
          title: 'Author'
        },
        {
          path: 'contact',
          component: ContactComponent,
          title: 'Contact'
        },
        {
          path: 'privace_policy',
          component: PrivacePolicyComponent,
          title: 'Privace'
        },
        {
          path: '**',
          component: PageNotFoundComponent
        }
      ]
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
];
