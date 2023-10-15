<script type="text/javascript">
	export let link = '/';
</script>

<div class="py-5">
	<h2>
		<a href={link}>
			<slot name="title" />
		</a>
	</h2>
	<p>
		<slot name="description" />
	</p>
</div>
