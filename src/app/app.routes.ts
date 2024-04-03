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
import { CategoryMainComponent } from './components/category-main/category-main.component';
import { AdminComponent } from './admin/admin.component';
// import { SigninSignupComponent } from './customer/signin-signup/signin-signup.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminBlogComponent } from './pages/admin-blog/admin-blog.component';
import { AdminAuthorsComponent } from './pages/admin-authors/admin-authors.component';
import { AdminContactComponent } from './pages/admin-contact/admin-contact.component';
import { AdminCategoryComponent } from './pages/admin-category/admin-category.component';



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
          path: 'blog_post/:id',
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
          children: [
            {
              path: '',
              component: CategoryMainComponent
            },
            {
              path: 'business',
              component: BussinessComponent
            },
            {
              path: 'startup',
              component: StartupComponent
            },
            {
              path: 'economy',
              component: EcanomyComponent
            },
            {
              path: 'technology',
              component: TechnologyComponent
            }
          ]
        },
        {
          path: 'author/:id',
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
      path: 'admin',
      component: AdminComponent,
      title: 'Admin',
      children: [
        {
          path: 'login',
          component: AdminLoginComponent
        },
        {
          path: 'home',
          component: AdminHomeComponent,
          title: 'Home',
          children: [
            {
              path: 'category',
              component: AdminCategoryComponent,
              title: 'Category'
            },
            {
              path: 'blog',
              component: AdminBlogComponent,
              title: 'Blog'
            },
            {
              path: 'authors',
              component: AdminAuthorsComponent,
              title: 'Authors'
            },
            {
              path: 'contact',
              component: AdminContactComponent,
              title: 'Contact'
            },
            // {
            //   path: '**',
            //   component: PageNotFoundComponent
            // }
          ]
        },
        // {
        //   path: '**',
        //   component: PageNotFoundComponent
        // }
      ]
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
];
