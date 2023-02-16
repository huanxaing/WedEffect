<?php
	class NewsAction extends PublicAction{

		public function index(){
			import("ORG.Util.Page");

			$news_id = $this->getTypeID(NEWS);

			
			
			$count   = M('article')->where("`pid` in ($news_id)")->count();
			$page    = new Page($count,$this->config('page_default'));

			$news    = M('article')->where("`pid` in ($news_id)")
							   	   ->order('`order` desc,`id` desc')
							   	   ->limit($page->firstRow.','.$page->listRows)
							       ->select();
			
			
			foreach($news as $key=>$value)
			{
				$news[$key]['url'] = __APP__.'/news/'.$value['pid'].'_'.$value['id'];
			}

			$category=M('type')->find(NEWS);
			$title       = $category['name'];
			$keywords    = $category['keywords'];
			$description = $category['description'];
            $this->header_seo($title, $keywords, $description);
            $this->page_location(NEWS);
            $this->catname(NEWS);
			if($count) $this->assign('exist',true);
			$this->assign('page',$page->show());
			$this->assign('list',$news);

			$this->display();
			
		}

		public function news_info(){			//新闻ID
			$id   = intval($_GET['id']);

			// 内页调取跟列表页对应的sidebar
			$typeId = intval($_GET['type']);

			// 默认typeInfo为一级分类
			$typeInfo = M('Type')->where("id = $typeId")->find();
			/*
			*如果这个typeInfo这个分类的父类为1的话 查询他的子类
			*如果typeInfo分类的父类不为1的话 反查他的父类
			*/
			if($typeInfo['parent'] == 1){
				$type_son = M('Type')->where("parent = $typeId")->order('`order` desc,`id` asc')->select();
			}else{
				// 反查typeInfo的父类
				$parent_type = M('Type')->where("id = ".$typeInfo['parent'])->order('`order` desc,`id` asc')->find();
				// 默认typeInfo为一级分类 把parent_type的数据传递给typeInfo 
				// $typeInfo = $parent_type;
				$type_son = M('Type')->where("parent = ".$parent_type['id'])->order('`order` desc,`id` asc')->select();
				$this->assign('parent_type',$parent_type);
			}
			$this->assign('typeInfo',$typeInfo);
			$this->assign('type_son',$type_son);

			// 内页调取跟列表页对应的sidebar
			
			if($id > 0){
				$news = M('article')->where("`id`=$id")->find();
				$user = M('user')->field('`username`')->find();

				M('article')->where("`id`=$id")->setInc('click');
			}else{
				$this->_404();
			}

			$title       = $news['title'].' - '.$this->getTypeName($news['pid']);
			$keywords    = $news['keywords'];
			$description = $news['description'];
			$this->header_seo($title, $keywords, $description);
			$this->page_location($news['pid']);
			$this->catname($news['pid']);
			$this->prev_next($news['id'],'article');

			$this->assign('news',$news);
			$this->assign('user',$user);			
			// switch ($typeinfo['type']) {
			// 	case '2':
			// 		$this->display('2');
			// 		break;

			// 	case '3':
			// 		$this->display('3');
			// 		break;
				
			// 	default:
			// 		$this->display('1');
			// 		break;
			// }
			$this->display();
		}

		public function news_type(){
			import("ORG.Util.Page");
			//新闻类型
			$type = intval($_GET['type']);
			if ($type > 0) {

// 列表页左侧调取不同的sidebar

				// 默认typeInfo为一级分类
				$typeInfo = M('Type')->where("id = $type")->find();
				/*
				*如果这个typeInfo这个分类的父类为1的话 查询他的子类
				*如果typeInfo分类的父类不为1的话 反查他的父类
				*/
				if($typeInfo['parent'] == 1){
					$type_son = M('Type')->where("parent = $type")->order('`order` desc,`id` asc')->select();
				}else{
					// 反查typeInfo的父类
					$parent_type = M('Type')->where("id = ".$typeInfo['parent'])->order('`order` desc,`id` asc')->find();
					// 默认typeInfo为一级分类 把parent_type的数据传递给typeInfo 
					$typeInfo = $parent_type;
					$type_son = M('Type')->where("parent = ".$typeInfo['id'])->order('`order` desc,`id` asc')->select();
				}				
				$this->assign('typeInfo',$typeInfo);
				$this->assign('type_son',$type_son);

// 列表页左侧调取不同的sidebar




				$news_id = $this->getTypeID($type);							
				$count   = M('article')->where("`pid` in ($news_id)")->count();
				$page    = new Page($count,$this->config('page_default'));

				$news    = M('article')->where("`pid` in ($news_id)")
								   	   ->order('`order` desc,`id` desc')
								   	   ->limit($page->firstRow.','.$page->listRows)
								       ->select();
			}else{
				$this->_404();
				exit;
			}	
			
			if(!$count){
				$this->assign('exist',false);
			}else{
				foreach($news as $key=>$value)
				{
					$news[$key]['url'] = __APP__.'/news/'.$value['pid'].'_'.$value['id'];
				}
				$this->assign('exist',true);
				$this->assign('list',$news);
				$this->assign('page',$page->show());
			}

			$category=M('type')->find($type);
			$title       = $this->getTypeName($category['id']);
			$keywords    = $category['keywords'];
			$description = $category['description'];			
			$this->header_seo($title, $keywords, $description);
			$this->page_location($category['id']);
			$this->catname($category['id']);

			$this->display('index');
			
		}
	}
?>